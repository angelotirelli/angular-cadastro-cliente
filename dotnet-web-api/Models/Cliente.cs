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
        public required string Logradouro { get; set; }
        public string? Complemento { get; set; }
        public required string Numero { get; set; }
        public required string Bairro { get; set; }
        public required string Cidade { get; set; }
        public required string Uf { get; set; }
        public required string CodigoIbge { get; set; }
        public string? DDD { get; set; }
        public string? Telefone { get; set; }
        public required bool Ativo { get; set; }

    }
}