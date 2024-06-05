using Xamarin.Forms;

using GBetApp.Views;
using GBetApp.ViewModels;
using System.Threading.Tasks;
using Xamarin.Essentials;

namespace GBetApp
{
    public partial class AppShell : Xamarin.Forms.Shell
    {
        public static MainViewModel MainViewModel { get; private set; }

        public AppShell()
        {
            InitializeComponent();

            Routing.RegisterRoute(nameof(LoginPage), typeof(LoginPage));
            Routing.RegisterRoute(nameof(BetsPage), typeof(BetsPage));
            Routing.RegisterRoute(nameof(ReplenishmentPage), typeof(ReplenishmentPage));
            Routing.RegisterRoute(nameof(InfoPage), typeof(InfoPage));

            MainViewModel = new MainViewModel();
            BindingContext = MainViewModel;
        }
    }
}