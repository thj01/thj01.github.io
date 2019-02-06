from turtle import *

#huset
forward(160)
left(90)
forward(80)
left(90)
forward(160)
left(90)
forward(80)
left(90)

#taget
left(90)
forward(80)
goto(80,160)
goto(160,80)

#vindue 1
penup()
goto(20,30)
pendown()
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)

#vindue 2
penup()
goto(60,30)
pendown()

forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)

#dør
penup()
goto(110,0)
pendown()

forward(60)
right(90)
forward(30)
right(90)
forward(60)

hideturtle()