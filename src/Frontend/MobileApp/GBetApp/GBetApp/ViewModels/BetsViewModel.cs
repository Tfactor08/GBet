using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

using Xamarin.Forms;

using MvvmHelpers;

using Acr.UserDialogs;

using GBetApp.Models;
using GBetApp.Services;

namespace GBetApp.ViewModels
{
    internal class BetsViewModel : BaseViewModel
    {
        #region Поля
        private IDataService dataService;
        private IEnumerable<Student> students;
        private Event _event;
        private string errorText;
        #endregion

        public BetsViewModel(int eventId)
        {
            dataService = DependencyService.Get<IDataService>();

            LoadData(eventId);
        }

        #region Свойства

        public IEnumerable<Student> Students
        {
            get => students;
            set => SetProperty(ref students, value);
        }
        public Event Event
        {
            get => _event;
            set => SetProperty(ref _event, value);
        }
        public string ErrorText
        {
            get => errorText;
            set => SetProperty(ref errorText, value);
        }
        #endregion

        /// <summary>
        /// Метод при выборе ставки.
        /// </summary>
        public void Selected(object sender, SelectionChangedEventArgs args)
        {
            if (!(args.CurrentSelection.FirstOrDefault() is Bet bet))
                return;

            UserDialogs.Instance.Prompt(new PromptConfig
            {
                InputType = InputType.DecimalNumber,
                Message = "Сумма",
                CancelText = "Отмена",
                Placeholder = "Сумма",
                OnAction = (result) =>
                {
                    if (result.Ok)
                    {
                        if (!string.IsNullOrEmpty(result.Text))
                        {
                            PlaceBet(bet.Id, decimal.Parse(result.Text));
                            AppShell.MainViewModel.UpdateUserData();
                        }
                    }
                }
            });

            ((CollectionView)sender).SelectedItem = null;
        }

        /// <summary>
        /// Поставить ставку.
        /// </summary>
        /// <param name="betId">Id ствки.</param>
        /// <param name="amount">Сумма ставки.</param>
        /// <returns></returns>
        private async Task PlaceBet(int betId, decimal amount)
        {
            int userId = AppShell.MainViewModel.User.Student.Id;

            var response = await dataService.CreateUserBet(userId, betId, amount);

            await UserDialogs.Instance.AlertAsync(response.Content, okText: "OK");
        }

        /// <summary>
        /// Загрузить данные по событию.
        /// </summary>
        /// <param name="eventId">Id события.</param>
        private async void LoadData(int eventId)
        {
            IsBusy = true;

            await Task.Delay(1000);

            var students = await dataService.GetStudents();
            var userId = AppShell.MainViewModel.UserId;

            // Сортировка ставок на данного ученика.
            foreach (var student in students)
            {
                student.Bets = student.Bets
                    // Сортиовка по событию.
                    .Where(bet => bet.Event.Id == eventId)
                    // Сортировка по Id пользователя.
                    .Where(bet => bet.BetObject.Id != userId);
            }

            var _event = await dataService.GetEvent(eventId);

            Event = _event;
            Students = students
                // Сортировка учеников по наличию савок на ученика.
                .Where(student => student.Bets.Count() != 0);

            IsBusy = false;
        }
    }
}
