namespace GBetApp.Models
{
    /// <summary>
    /// Ставка.
    /// </summary>
    public class Bet
    {
        #region Properties
        /// <summary>
        /// Id ставки.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Событие ставки.
        /// </summary>
        public Event Event { get; set; }

        /// <summary>
        /// Объект ставки.
        /// </summary>
        public Student BetObject { get; set; }

        /// <summary>
        /// Тип ставки.
        /// </summary>
        public BetType BetType { get; set; }

        /// <summary>
        /// Коэффициент ставки.
        /// </summary>
        public decimal Rate { get; set; }
        #endregion

        public override string ToString()
        {
            return $"{BetObject.LastName} {BetObject.Name} получит {BetType.Description}. {Event.Name}";
        }
    }
}
