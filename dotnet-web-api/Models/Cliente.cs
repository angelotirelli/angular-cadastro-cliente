using System.ComponentModel.DataAnnotations;

namespace dotnet_web_api.Models
{
    public class ClienteModel
    {
        [Key]
        public int Id { get; set; }
        public required string Nome { get; set; }
        public required string Email { get; set; }
        public string? DataNascimento { get; set; }
        public required string Cep { get; set; }
        public required bool Ativo { get; set; }

    }
}