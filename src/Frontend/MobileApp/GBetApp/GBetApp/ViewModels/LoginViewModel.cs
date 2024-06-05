using System;
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
    public class LoginViewModel : ObservableObject
    {
        private readonly IDataService dataService;

        private Student selectedStudent;
        private string errorMessage;
        private bool buttonEnabled = true;

        public LoginViewModel()
        {
            dataService = DependencyService.Get<IDataService>();

            LoginCommand = new AsyncCommand(Login);

            GetStudentsAsync();
        }

        public ICommand LoginCommand { get; }
        public List<Student> Students { get; private set; }
        public Student SelectedStudent
        {
            get => selectedStudent;
            set => SetProperty(ref selectedStudent, value);
        }
        public string ErrorMessage
        {
            get => errorMessage;
            set => SetProperty(ref errorMessage, value);
        }
        public bool ButtonEnabled
        {
            get => buttonEnabled;
            set => SetProperty(ref buttonEnabled, value);
        }

        /// <summary>
        /// Получение неавторизованных учеников.
        /// </summary>
        private async void GetStudentsAsync()
        {
            var users = await dataService.GetUsers();

            var students = (await dataService?.GetStudents())
                ?.Where(student => !users.Any(user => user.Student.Id == student.Id));

            if (students.Count() == 0)
            {
                ErrorMessage = "All students are autorizated";
                ButtonEnabled = false;
                return;
            }

            Students = new List<Student>(students);
            OnPropertyChanged(nameof(Students));
        }

        /// <summary>
        /// Авторизация пользователя.
        /// </summary>
        private async Task Login()
        {
            if (SelectedStudent is null)
            {
                ErrorMessage = "Выберите ученика!";
                return;
            }

            int studentId = SelectedStudent.Id;

            try
            {
                await dataService.CreateUser(studentId);
            }
            catch (Exception exception)
            {
                ErrorMessage = exception.Message;
                return;
            }

            Preferences.Set("userId", studentId);
            Preferences.Set("userLoggedIn", true);

            await Shell.Current.GoToAsync($"//{nameof(MainPage)}");
        }
    }
}
