#dm = input("indtast værdimængde på formen [x_min;x_max]: ")
dm = "[1;  5,67 ]"
dm = dm.replace(" ","")
dm = dm.replace(",",".")
print(dm)

if dm[:1] == "[" and dm[-1:] == "]":
	dm_rest = dm[1:-1]
	if len(dm_rest)>2 and dm_rest.count(";")==1:
		x_min = dm_rest[:dm_rest.find(";")]
		x_max = dm_rest[dm_rest.find(";")+1:]
		try:
			float(x_min)
			float(x_max)
		except:
			print("Du har ikke indtastet tal i værdimængden")
			exit()

	print("Du har valgt intervallet [ {0};{1} ]".format(x_min,x_max))

else:
	print("Du har ikke indtastet definitionsmængden korrekt.")
