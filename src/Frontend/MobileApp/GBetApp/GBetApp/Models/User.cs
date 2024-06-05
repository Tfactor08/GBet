namespace GBetApp.Models
{
    /// <summary>
    /// Пользователь приложения.
    /// </summary>
    public class User
    {
        #region Properties
        /// <summary>
        /// Ученик.
        /// </summary>
        public Student Student { get; set; }

        /// <summary>
        /// Подтверждена ли учетная запись.
        /// </summary>
        public bool IsVerified { get; set; }

        /// <summary>
        /// Сумма на счетё.
        /// </summary>
        public decimal Balance { get; set; }
        #endregion

        public override string ToString()
        {
            return $"{Student.LastName} {Student.Name}";
        }
    }
}
