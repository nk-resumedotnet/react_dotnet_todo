using System.ComponentModel.DataAnnotations;

namespace cg4it_react_dotnet_todo
{
    public class TodoItem
    {
        [Key]
        public string TaskId { get; set; }
        public string? TaskName { get; set; }
        public bool IsDone { get; set; }
    }
}
