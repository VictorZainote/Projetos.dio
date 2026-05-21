using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projetos.dio.Models
{
    public class Calculadora
    {
        public void Somar(int x, int y){
            Console.WriteLine($"{x} + {y} = {x+y}");
        }
        public void Subtrair(int x, int y){
            Console.WriteLine($"{x} - {y} = {x-y}");
        }
        public void Dividir(int x, int y){
            Console.WriteLine($"{x} / {y} = {x / y}");
        }
        public void Multiplicar(int x, int y){
        Console.WriteLine($"{x} X {y} = {x*y}");
        }
        public void Potencia(int x, int y){
            double pot = Math.Pow(x,y);
            Console.WriteLine($"{x} ^ {y} = {pot}");
        }
        public void Seno(double angulo){
            
            double radiando = angulo * Math.PI / 180;
            double seno = Math.Sin(radiando);
            Console.WriteLine($"Seno de {angulo} = {Math.Round(seno, 3)}");
        }
        public void Cosseno(double angulo){
            
            double radiando = angulo * Math.PI / 180;
            double cosseno = Math.Cos(radiando);
            Console.WriteLine($"Cosseno de {angulo} = {Math.Round(cosseno, 3)}");
        }
        public void Tangente(double angulo){
            
            double radiando = angulo * Math.PI / 180;
            double tangente = Math.Tan(radiando);
            Console.WriteLine($"Tangente de {angulo} = {Math.Round(tangente,3)}");
        }
        public void RaizQuadrada(double x){
            
            double raiz = Math.Sqrt(x);
            Console.WriteLine($"A raiz quadrada de {x}= {raiz}");
        }
    }
}