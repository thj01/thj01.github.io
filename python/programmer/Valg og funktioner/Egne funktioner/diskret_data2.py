import statistics as st
import numpy as np
import matplotlib.pyplot as plt

# https://docs.python.org/3/library/statistics.html

x = [2,2,4,4,4,7,7,10,10,12]

#antal
print("Antal observationer: {0}".format(len(x)))

#gennemsnit
print("Gennemsnit = {0}".format(st.mean(x)))
#median
print("Median: {0}{1}".format(st.median(x),2))

#min og max værdi
print("Mindste værdi: {0}".format(min(x)))

print("maksimale værdi: {0}".format(max(x)))


try:
	st.mode(x)
	print("Typetal: {0}".format(st.mode(x)))
	
except:
	print("der er ikke noget typetal (flere værdier med samme antal")

#Varians
print("Varians: {0}".format(round(st.variance(x),2)))

#Spredning
print("Varians: {0}".format(round(st.stdev(x),2)))

# Finder unikke værdier
x_unik = np.unique(x)
# Finder antal for hver unik værdi
x_unik_antal = []
for i in x_unik:
	x_unik_antal.append(x.count(i))
	
#plotfunktionen

plt.bar(x_unik,x_unik_antal, width=0.8)
plt.title("Kontinuert data")
plt.show()

plt.pie(x_unik,x_unik_antal,)
plt.title("Kontinuert data")
plt.show()
