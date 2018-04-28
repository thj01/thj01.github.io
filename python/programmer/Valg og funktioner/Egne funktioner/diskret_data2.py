import statistics as st

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
print("Varians: {0}".format(st.variance(x)))

#Spredning
print("Varians: {0}".format(st.stdev(x)))
