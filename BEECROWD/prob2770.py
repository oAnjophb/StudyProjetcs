
altura, largura, qty_placa = map(int, input().split())

for _ in range(qty_placa):
    altu2, larg2 = map(int, input().split())
    nuns = [altu2, larg2]

    for i in nuns:
        if i > largura and i > altura:
            print('Nao')
            break

        else:
            print('Sim')
            break
