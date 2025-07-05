# Entrada
# Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. 
# Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. 
# Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

# Saída
# Na saída, deve ser apresentada a duração do evento, no seguinte formato:

# W dia(s)
# X hora(s)
# Y minuto(s)
# Z segundo(s)

# Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.


def getNumbersOnTime (time):
    hours = time[0] + time[1]
    minutes = time[5] + time[6]
    seconds = time[10] + time[11]

    return [int(hours), int(minutes), int(seconds)]


dayInit = input().split()
timeInit = input()
dayEnd = input().split()
timeEnd = input()


numbersInit = getNumbersOnTime(timeInit)
numbersEnd = getNumbersOnTime(timeEnd)

start = int(dayInit[1]) * 86400 + numbersInit[0] * 3600 + numbersInit[1] * 60 + numbersInit[2]
end = int(dayEnd[1]) * 86400 + numbersEnd[0] * 3600 + numbersEnd[1] * 60 + numbersEnd[2]
total = end - start

days = total // 86400
hours = (total % 86400) // 3600
minutes = (total % 3600) // 60
seconds = total % 60

print(f'{days} dia(s)')
print(f'{hours} hora(s)')
print(f'{minutes} minuto(s)')
print(f'{seconds} segundo(s)')
