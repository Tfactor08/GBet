using Xamarin.Forms.Xaml;
using Xamarin.Forms;

using GBetApp.ViewModels;

namespace GBetApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class BetHistoryPage : ContentPage
    {
        public BetHistoryPage()
        {
            InitializeComponent();

            BindingContext = new BetHistoryViewModel();

            betsListView.ItemSelected += (sender, e) =>
            {
                if (sender is ListView lw) lw.SelectedItem = null;
            };
        }
    }
}