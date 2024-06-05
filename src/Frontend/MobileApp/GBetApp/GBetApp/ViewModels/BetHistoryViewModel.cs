using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

using Xamarin.Forms;

using MvvmHelpers;
using MvvmHelpers.Commands;

using GBetApp.Models;
using GBetApp.Services;
using System.Windows.Input;

namespace GBetApp.ViewModels
{
    public class BetHistoryViewModel : BaseViewModel
    {
        private readonly IDataService dataService;
        private bool isBetListEmpty;

        public BetHistoryViewModel()
        {
            dataService = DependencyService.Get<IDataService>();

            RefreshCommand = new AsyncCommand(Refresh);

            Refresh();
        }

        public ICommand RefreshCommand { get; private set; }
        public List<UserBet> UserBets { get; set; }
        public bool IsBetListEmpty
        {
            get => isBetListEmpty;
            set => SetProperty(ref isBetListEmpty, value);
        }

        /// <summary>
        /// Получение всех ставок пользователя.
        /// </summary>
        /// <returns>Список ставок.</returns>
        private async Task<List<UserBet>> GetUserBets()
        {
            var userId = AppShell.MainViewModel.UserId;
            var bets = await dataService.GetUserBets();

            return bets.Where(bet => bet.User.Student.Id == userId).ToList();
        }

        /// <summary>
        /// Загрузка данных.
        /// </summary>
        private async void LoadData()
        {
            UserBets = await GetUserBets();
            // Сортировка по дате.
            UserBets.Sort((x, y) => y.Date.CompareTo(x.Date));

            OnPropertyChanged(nameof(UserBets));

            IsBetListEmpty = UserBets == null || UserBets.Count == 0;
        }

        private async Task Refresh()
        {
            IsBusy = true;

            await Task.Delay(1500);

            await Task.Run(() => LoadData());

            IsBusy = false;
        }
    }
}
