using Xamarin.Forms;
using Xamarin.Forms.Xaml;

using GBetApp.ViewModels;
using Xamarin.Essentials;

namespace GBetApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginPage : ContentPage
    {
        public LoginPage()
        {
            InitializeComponent();

            BindingContext = new LoginViewModel();
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();

            if (Preferences.Get("userLoggedIn", false))
            {
                Shell.Current.GoToAsync($"//{nameof(MainPage)}");
            }
        }
    }
}