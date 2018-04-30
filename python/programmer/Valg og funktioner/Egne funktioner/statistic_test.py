import statistics as st

y = [2, 2, 4, 4, 4, 7, 7, 7, 10, 12]

print("Datasæt: {0}\n".format(y))

try:
	st.mode(y)
	print("typetaller er: {0}".format(st.mode(y)))
	
except:
	print("Der er ikke noget typtetal.")
