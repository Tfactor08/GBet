using System;
using System.Drawing;

namespace GBetApp.Models
{
    /// <summary>
    /// Ставка пользователя.
    /// </summary>
    public class UserBet
    {
        #region Properties
        /// <summary>
        /// Id ставки.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Владелец ставки.
        /// </summary>
        public User User { get; set; }

        /// <summary>
        /// Ставка.
        /// </summary>
        public Bet Bet { get; set; }

        /// <summary>
        /// Сумма ставки.
        /// </summary>
        public decimal BetAmount { get; set; }

        /// <summary>
        /// Подтверждена ли ставка.
        /// </summary>
        public bool IsVerified { get; set; }

        /// <summary>
        /// Дата ставки.
        /// </summary>
        public DateTime Date { get; set; }

        /// <summary>
        /// Выиграшна ли ставка.
        /// </summary>
        public bool IsWon { get; set; }

        /// <summary>
        /// Получен ли выигрыш.
        /// </summary>
        public bool IsGainReceived { get; set; }

        /// <summary>
        /// Возможный выигрыш.
        /// </summary>
        public decimal PossibleGain => decimal.Round(BetAmount * Bet.Rate, 2);

        /// <summary>
        /// Статус ставки.
        /// </summary>
        public string Status
        {
            get
            {
                if (!IsVerified)
                    return "Не проверена";

                switch (Bet.Event.IsFinished)
                {
                    case true:
                        return IsWon ? "Выиграшна" : "Проиграшна";
                    case false:
                        return "Событие не проведено";
                    default:
                        return string.Empty;
                }
            }
        }

        /// <summary>
        /// Цвет статуса ставки.
        /// </summary>
        public Color StatusColor
        {
            get
            {
                return IsWon ? Color.Green : Color.Red;
            }
        }
        #endregion

        public override string ToString()
        {
            return $"{Bet}: {BetAmount}";
        }
    }
}
