import statistics as st
import numpy as np
import matplotlib.pyplot as plt

# https://docs.python.org/3/library/statistics.html

x = [1,1,1,2,3,2,1,3,1,3,2,2,3,1,3,1,3,2,1,2,3]

print(len(x))

print(st.mode(x))

#print(np.percentile(x,70))

x_unik = np.unique(x)

print(x_unik)

x_unik_antal = []

for i in x_unik:
	
	x_unik_antal.append(x.count(i))
	
print(x_unik_antal)
	
	
	
	
	
