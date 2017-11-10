def bum(a,b):
	
	# a er tallene der skal undersøges
	# b tabellen der skal undersøges
	
	for i in range(a):
		
		i +=1
		
		if i%b == 0:
			
			print("BUM")

		else:
			
			print(i)

bum(16,3)
