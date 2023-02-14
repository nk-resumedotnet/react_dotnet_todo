using cg4it_react_dotnet_todo.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cg4it_react_dotnet_todo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly DataContext _dbContext;
        public TodoListController(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("AddTodoListTask")]
        public async Task<ActionResult<List<TodoItem>>> AddTodoListTask(TodoItem task)
        {
            _dbContext.TodoItems.Add(task);
            await _dbContext.SaveChangesAsync();

            return Ok(await _dbContext.TodoItems.ToListAsync());
        }


        [HttpGet]
        [Route("GetToDoList")]
        public async Task<ActionResult<List<TodoItem>>> GetToDoList()
        {
            return Ok(await _dbContext.TodoItems.ToListAsync());
        }

        [HttpPost]
        [Route("UpdateTodoListTask")]
        public async Task<ActionResult<List<TodoItem>>> UpdateTodoListTask(TodoItem task)
        {
            var taskFound = _dbContext.TodoItems.FirstOrDefault(x => x.TaskId == task.TaskId);
            if (taskFound != null)
            {
                taskFound.TaskName = task.TaskName;
                await _dbContext.SaveChangesAsync();
                return Ok(await _dbContext.TodoItems.ToListAsync());
            }
            else
                return Ok(await _dbContext.TodoItems.ToListAsync());
        }

        [HttpPost]
        [Route("DeleteTodoListTask")]
        public async Task<ActionResult<List<TodoItem>>> DeleteTodoListTask(string taskId)
        {
            var taskFound = _dbContext.TodoItems.FirstOrDefault(x => x.TaskId == taskId);
            if (taskFound != null)
            {
                _dbContext.Remove(taskFound);
                await _dbContext.SaveChangesAsync();
                return Ok(await _dbContext.TodoItems.ToListAsync());
            }
            else
                return Ok(await _dbContext.TodoItems.ToListAsync());
        }


    }
}
