using GBetApp.Views;
using Plugin.Connectivity;
using Xamarin.Essentials;
using Xamarin.Forms;

namespace GBetApp
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new AppShell();
        }

        protected override void OnStart()
        {
            base.OnStart();
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }
    }
}
