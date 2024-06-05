using System.Net;
using System.Threading.Tasks;
using System.Collections.Generic;

using GBetApp.Models;

namespace GBetApp.Services
{
    /// <summary>
    /// Интерфейс обработки данных приложения.
    /// </summary>
    public interface IDataService
    {
        #region Student
        /// <summary>
        /// Получить всех учеников.
        /// </summary>
        /// <returns>Список учеников.</returns>
        Task<IEnumerable<Student>> GetStudents();

        /// <summary>
        /// Получить ученика по Id.
        /// </summary>
        /// <param name="id">Id ученика.</param>
        /// <returns>Ученик.</returns>
        Task<Student> GetStudent(int id);
        #endregion

        #region User
        /// <summary>
        /// Получить всех пользователей приложкения.
        /// </summary>
        /// <returns>Список пользователей.</returns>
        Task<IEnumerable<User>> GetUsers();

        /// <summary>
        /// Получить пользователя по Id.
        /// </summary>
        /// <param name="student">Id пользователя.</param>
        /// <returns>Пользователь.</returns>
        Task<User> GetUser(int userId);

        /// <summary>
        /// Изменить баланс пользователя.
        /// </summary>
        /// <param name="amount">Сумма.</param>
        /// <returns>Статус http ответа.</returns>
        Task<HttpStatusCode> ChangeUserBalance(User user, decimal amount);

        /// <summary>
        /// Создать пользователя.
        /// </summary>
        /// <param name="studentId">Id ученика.</param>
        /// <returns>Статус http ответа.</returns>
        Task<HttpStatusCode> CreateUser(int studentId);
        #endregion

        #region Subject
        /// <summary>
        /// Получить все школьные предметы.
        /// </summary>
        /// <returns>Список предметов.</returns>
        Task<IEnumerable<Subject>> GetSubjects();

        /// <summary>
        /// Получить предмет по Id.
        /// </summary>
        /// <param name="id">Id предмета.</param>
        /// <returns>Школьный предмет.</returns>
        Task<Subject> GetSubject(int id);
        #endregion

        #region Events
        /// <summary>
        /// Получить все события.
        /// </summary>
        /// <returns>Список событий.</returns>
        Task<IEnumerable<Event>> GetEvents();

        /// <summary>
        /// Получить событие по Id.
        /// </summary>
        /// <param name="id">Id события.</param>
        /// <returns>Событие.</returns>
        Task<Event> GetEvent(int id);
        #endregion

        #region Bets
        
        /// <summary>
        /// Получить все доступные ставки по данному событию.
        /// </summary>
        /// <param name="eventId">Id события.</param>
        /// <returns>Список событий.</returns>
        Task<IEnumerable<Bet>> GetBets(int eventId);

        /// <summary>
        /// Получить ставку по Id.
        /// </summary>
        /// <param name="id">Id ставки.</param>
        /// <returns>Ставка.</returns>
        Task<Bet> GetBet(int id);
        #endregion

        #region UserBet
        /// <summary>
        /// Получить все ставки пользователей.
        /// </summary>
        /// <returns>Список ставок пользователей.</returns>
        Task<IEnumerable<UserBet>> GetUserBets();

        /// <summary>
        /// Получить ставку пользователя по Id.
        /// </summary>
        /// <param name="id">Id пользователя.</param>
        /// <returns>Пользователь.</returns>
        Task<UserBet> GetUserBet(int id);

        /// <summary>
        /// Создать ставку.
        /// </summary>
        /// <param name="userId">Id пользователя.</param>
        /// <param name="betId">Id ставки.</param>
        /// <param name="amount">Сумма ставки.</param>
        /// <returns>Статус http ответа.</returns>
        Task<RestSharp.IRestResponse> CreateUserBet(int userId, int betId, decimal amount);
        #endregion
    }
}
