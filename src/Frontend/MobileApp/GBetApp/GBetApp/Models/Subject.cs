namespace GBetApp.Models
{
    /// <summary>
    /// Школьный предмет.
    /// </summary>
    public class Subject
    {
        /// <summary>
        /// Id предмета.
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Название предмета.
        /// </summary>
        public string Name { get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}
