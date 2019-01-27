from turtle import *
from random import randrange

speed(100)
antal = 0
max_afstand = 300
max_antal_streger = 1000


#CIRKEL
penup()
rt(90)
fd(max_afstand)
lt(90)
pendown()
circle(max_afstand,360)
penup()
setpos(0,0)
pendown()



while True:
    længde = randrange(10,80,10)
    vinkel = randrange(0,360,15)
    
 
    
    rt(vinkel)
    fd(længde)
    if abs(pos()) < 1:
        break
    if abs(pos()) > max_afstand:
        penup()
        goto(0,0)
        pendown()
        antal +=1
        print(antal)