from turtle import *

#huset
for i in range(2):
    fd(320)
    lt(90)
    fd(160)
    lt(90)

#taget
lt(90)
fd(160)
goto(160,280)
goto(320,160)

#vindue 1
penup()
goto(40,60)
pendown()

for i in range(4):
    fd(60)
    rt(90)


#vindue 2
penup()
goto(120,60)
pendown()

for i in range(4):
    fd(60)
    rt(90)

#dør
penup()
goto(220,0)
pendown()

fd(120)
rt(90)
fd(60)
rt(90)
fd(120)

hideturtle()
