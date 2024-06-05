using System;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

using GBetApp.Models;

using Newtonsoft.Json;

using RestSharp;

using GBetApp.Services;

[assembly: Xamarin.Forms.Dependency(typeof(APIDataService))]
namespace GBetApp.Services
{
    /// <summary>
    /// Обработка данных с помощью API.
    /// </summary>
    public class APIDataService : IDataService
    {
        private readonly string baseUrl = "https://api-gbet.herokuapp.com/api/";
        private readonly IRestClient client;

        public APIDataService()
        {
            client = new RestClient(new Uri(baseUrl));
        }

        #region Student
        public async Task<IEnumerable<Student>> GetStudents() =>
            await GetAsync<IEnumerable<Student>>("students/");

        public async Task<Student> GetStudent(int id) =>
            await GetAsync<Student>("students/", id);
        #endregion

        #region User
        public async Task<IEnumerable<User>> GetUsers() =>
            await GetAsync<IEnumerable<User>>("users/");

        public async Task<User> GetUser(int id) =>
            await GetAsync<User>("users/", id);

        public async Task<HttpStatusCode> ChangeUserBalance(User user, decimal amount)
        {
            var body = new Dictionary<string, decimal>
            {
                { "amount", amount }
            };
            var jsonBody = JsonConvert.SerializeObject(body);

            var request = new RestRequest($"users/{user.Student.Id}", Method.PUT).
                AddJsonBody(jsonBody);
            var response = await client.ExecuteAsync(request);

            if (response.IsSuccessful)
            {
                return response.StatusCode;
            }

            throw new Exception(response.Content);
        }

        public async Task<HttpStatusCode> CreateUser(int studentId) =>
            await PostAsync(
                "users/create/",
                new Dictionary<string, int>() { { "student_id", studentId } });
        #endregion

        #region Subject
        public async Task<IEnumerable<Subject>> GetSubjects() =>
            await GetAsync<IEnumerable<Subject>>("subjects/");

        public async Task<Subject> GetSubject(int id) =>
            await GetAsync<Subject>("subjects/", id);
        #endregion

        #region Event
        public async Task<IEnumerable<Event>> GetEvents() =>
            await GetAsync<IEnumerable<Event>>("events/");

        public async Task<Event> GetEvent(int id) =>
            await GetAsync<Event>("events/", id);
        #endregion

        #region Bet
        public async Task<IEnumerable<Bet>> GetBets(int eventId) =>
            await GetAsync<IEnumerable<Bet>>("bets/");

        public async Task<Bet> GetBet(int id) =>
            await GetAsync<Bet>("bets/", id);
        #endregion

        #region UserBet
        public async Task<IEnumerable<UserBet>> GetUserBets() =>
            await GetAsync<IEnumerable<UserBet>>("user_bets/");

        public async Task<UserBet> GetUserBet(int id) =>
            await GetAsync<UserBet>("user_bets/",  id);

        public async Task<IRestResponse> CreateUserBet(int userId, int betId, decimal amount)
        {
            var body = new Dictionary<string, object>
            {
                { "user_id", userId },
                { "bet_id", betId },
                { "bet_amount", amount }
            };
            var jsonBody = JsonConvert.SerializeObject(body);

            var request = new RestRequest("user_bets/create/", Method.POST)
                .AddJsonBody(jsonBody);
            var response = await client.ExecuteAsync(request);

            return response;
        }
        #endregion

        private async Task<T> GetAsync<T>(string resource)
        {
            var request = new RestRequest(resource, Method.GET);
            var response = await client.ExecuteAsync<T>(request);

            if (response.IsSuccessful)
            {
                return response.Data;
            }

            throw new Exception(response.Content);
        }
        
        private async Task<T> GetAsync<T>(string resource, int id)
        {
            var request = new RestRequest($"{resource}{id}", Method.GET);
            var response = await client.ExecuteAsync<T>(request);

            if (response.IsSuccessful)
            {
                return response.Data;
            }

            throw new Exception(response.Content);
        }

        private async Task<HttpStatusCode> PostAsync<K, V>(
            string resource, Dictionary<K, V> requestBody)
        {
            var body = requestBody;
            var jsonBody = JsonConvert.SerializeObject(body);

            var request = new RestRequest(resource, Method.POST).
                AddJsonBody(jsonBody);
            var response = await client.ExecuteAsync(request);

            if (response.IsSuccessful)
            {
                return response.StatusCode;
            }

            throw new Exception(response.Content);
        }
    }
}
