using MvvmHelpers.Commands;
using System;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Essentials;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace GBetApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class InfoPage : ContentPage
    {
        public InfoPage()
        {
            InitializeComponent();

            ClickCommand = new AsyncCommand(OnLinkClicked);

            BindingContext = this;
        }

        public ICommand ClickCommand { get; }

        private async Task OnLinkClicked()
        {
            string address = "Tfactory.GBet@gmail.com";
            await Launcher.OpenAsync(new Uri($"mailto:{address}"));
        }
    }
}