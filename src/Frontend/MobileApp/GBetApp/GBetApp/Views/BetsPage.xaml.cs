using Xamarin.Forms;
using Xamarin.Forms.Xaml;

using GBetApp.ViewModels;

namespace GBetApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    [QueryProperty(nameof(EventId), nameof(EventId))]
    public partial class BetsPage : ContentPage
    {
        private BetsViewModel viewModel;

        public string EventId { get; set; }

        public BetsPage()
        {
            InitializeComponent();
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();

            int.TryParse(EventId, out int result);

            viewModel = new BetsViewModel(result);

            BindingContext = viewModel;
        }

        private void CollectionView_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            viewModel.Selected(sender, e);
        }

        private void ListView_ItemTapped(object sender, ItemTappedEventArgs e)
        {
            if (e.Item == null) return;

            if (sender is ListView listView) listView.SelectedItem = null;
        }
    }
}