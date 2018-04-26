x = [156,159,161,164,165,167, 168,171,173,173,174,176,177,177,179,179,180,181,183,183,185,187,192,194,198,201]








# ~ print(x)
# ~ print(hx)


# ~ fx=[]

# ~ n = 0

# ~ # Udregn n
# ~ for i in range(0,len(x)):
		# ~ n = n + hx[i]
# ~ print("n = {0}".format(n))

# ~ # udregn fx
# ~ for i in range(0,len(x)):
	# ~ fx.append(hx[i]/n)
# ~ #print(fx)

# ~ # udregn x_mid
# ~ x_mid=0
# ~ for i in range(0,len(x)):
	# ~ x_mid = x_mid + x[i]*fx[i]
# ~ print("Middelværdien er: {0}".format(x_mid))

# ~ var = 0
# ~ for i in range(0,len(x)):
	# ~ var = var + (1/(n-1)) * pow((x[i]-x_mid),2) * hx[i]

# ~ print("Variansen er: {0}".format(round(var,4)))

# ~ print("Spredningen er: {0}".format(round(pow(var,(1/2)),4)))
