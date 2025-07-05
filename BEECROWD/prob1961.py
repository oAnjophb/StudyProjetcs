
heightJump, Qty_pipe = map(int, input().split())
height_pipe = input().split()

numbers = []
jump = True   # ERRO: jump = False        


for pipes in height_pipe:
    convert_for_num = int(pipes)
    numbers.append(convert_for_num)

for i in range(Qty_pipe - 1):
    if abs(numbers[i + 1] - numbers[i]) > heightJump:      # ERRO: if abs(numbers[count + 1] - numbers[count]) <= heightJump
        jump = False                                       #               jump = true
        break                                              #        else:       
                                                           #            jump = false, break
if jump:    
    print('YOU WIN')    
else:
    print('GAME OVER')