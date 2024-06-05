using System;

namespace GBetApp.Models
{
    /// <summary>
    /// Событие.
    /// </summary>
    public class Event
    {
        #region Properties
        /// <summary>
        /// Id события.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Предмет события.
        /// </summary>
        public Subject Subject { get; set; }
        
        /// <summary>
        /// Название события.
        /// </summary>
        public string Name { get; set; }
        
        /// <summary>
        /// Дата проведения события.
        /// </summary>
        public DateTime Date { get; set; }

        /// <summary>
        /// Проведено ли событие.
        /// </summary>
        public bool IsFinished { get; set; }
        #endregion

        public override string ToString()
        {
            return $"{Subject}: {Name}";
        }
    }
}
