import statistics as st
import numpy as np
import matplotlib.pyplot as plt
import csv

with open("karakterer.csv", "r") as csvfile:
		reader = csv.reader(csvfile)
		x = list(reader)

print(x)
results = ["1", "2", "3"]
print(results)
results = [int(i) for i in results]
print(results)
[1, 2, 3]
