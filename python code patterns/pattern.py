n = 5  # You can take input from input() or change the value
string = ""

# External loop
for i in range(1, n + 1):
    # printing characters
    for j in range(i):
        string += chr(j + 65)
    string += "\n"

print(string)
