from random import random

ordsprog1 = "Man skal ikke gå over åen efter vand."

ordsprog2 = "Man skal ikke skue hunden på hårene."

ordsprog3 = "Lige børn leger bedst."

ordsprog4 = "Eksamen er de velforberedtes fest."

valg = random()


if valg < 1/4:
	
	print(ordsprog1)

elif valg < 2/4:
	
	print(ordsprog2)
	
elif valg < 3/4:
	
	print(ordsprog3)
	
else:
	
	print(ordsprog4)
