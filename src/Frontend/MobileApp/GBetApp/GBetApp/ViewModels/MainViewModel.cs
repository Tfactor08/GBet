using System.Linq;
using System.Windows.Input;
using System.Threading.Tasks;
using System.Collections.Generic;

using Xamarin.Forms;
using Xamarin.Essentials;

using MvvmHelpers;

using GBetApp.Views;
using GBetApp.Models;
using GBetApp.Services;
using MvvmHelpers.Commands;

namespace GBetApp.ViewModels
{    
    public class MainViewModel : ObservableObject
    {
        private readonly IDataService dataService;

        private User user;
        private Event selectedEvent;
        private bool isEventListEmpty;

        public MainViewModel()
        {
            dataService = DependencyService.Get<IDataService>();

            UpdateUserDataCommand = new AsyncCommand(UpdateUserData);
            SelectedCommand = new Xamarin.Forms.Command(async (object args) => await Selected(args));
            GoToPageCommand = new AsyncCommand<string>(GoToPage);
        }
        
        public ICommand UpdateUserDataCommand { get; private set; }
        public ICommand SelectedCommand { get; private set; }
        public ICommand GoToPageCommand { get; private set; }
        public IEnumerable<Event> Events { get; private set; }

        public Event SelectedEvent
        {
            get => selectedEvent;
            set => SetProperty(ref selectedEvent, value);
        }
        public User User
        {
            get => user;
            set => SetProperty(ref user, value);
        }
        public int UserId
        {
            get => Preferences.Get("userId", 0);
        }
        public bool IsEventListEmpty
        {
            get => isEventListEmpty;
            set => SetProperty(ref isEventListEmpty, value);
        }

        public async void LoadData()
        {
            try
            {
                User = await dataService.GetUser(UserId);
            }
            catch
            {
                Preferences.Clear();
                await Shell.Current.GoToAsync(nameof(LoginPage));
            }
            
            AppShell.Current.FlyoutBehavior =
                User.IsVerified ? FlyoutBehavior.Flyout : FlyoutBehavior.Disabled;

            Events = (await dataService.GetEvents())
                // Сортировка по непроведенным событиям.
                .Where(e => e.IsFinished == false);

            IsEventListEmpty = Events == null || Events.Count() == 0;

            OnPropertyChanged(nameof(Events));
        }

        public async Task GoToPage(string pageName)
        {
            await Task.Run(() => Shell.Current.FlyoutIsPresented = false);
            await Shell.Current.GoToAsync(pageName);
        }

        public async Task UpdateUserData()
        {
            User = await dataService.GetUser(UserId);
        }

        private async Task Selected(object args)
        {
            if (!(args is Event _event))
                return;

            SelectedEvent = null;

            var route = $"{nameof(BetsPage)}?EventId={_event.Id}";
            await AppShell.Current.GoToAsync(route);
        }
    }
}
