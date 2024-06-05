using System.Collections.Generic;

namespace GBetApp.Models
{
    /// <summary>
    /// Ученик класса.
    /// </summary>
    public class Student
    {
        #region Properties
        /// <summary>
        /// Id ученика.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Имя ученика.
        /// </summary>
        public string Name { get; set; }
        
        /// <summary>
        /// Фамилия ученика.
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// Список ставок на данного ученика.
        /// </summary>
        public IEnumerable<Bet> Bets { get; set; }
        #endregion

        public override string ToString()
        {
            return $"{LastName} {Name}";
        }
    }
}
