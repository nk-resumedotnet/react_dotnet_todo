using Microsoft.EntityFrameworkCore;

namespace cg4it_react_dotnet_todo.Data
{
    public class DataContext : DbContext
    {
        public DataContext()
        {
        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        // public DbSet<TodoItem> TodoItems { get; set; }
        public DbSet<TodoItem> TodoItems => Set<TodoItem>();
    }
}
