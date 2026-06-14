using Microsoft.AspNetCore.Mvc;

namespace FunBook.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
  [HttpGet]
  public IActionResult GetBooks()
  {
    return Ok(new[]
    {
            new
            {
                Id = 1,
                Title = "The Hobbit",
                Author = "J.R.R. Tolkien"
            },
            new
            {
                Id = 2,
                Title = "Dune",
                Author = "Frank Herbert"
            }
        });
  }
}