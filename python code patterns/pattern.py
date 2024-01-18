#-------character [patter]
# n = 5  # You can take input from input() or change the value
# string = ""

# # External loop
# for i in range(1, n + 1):
#     # printing characters
#     for j in range(i):
#         string += chr(j + 65)
#     string += "\n"

# print(string)
#! left invert pattern

# star = ""

# for i in range(1, 6):
#     for j in range(1, i + 1):
#         star += "*"
#     star += "\n"

# reversed_star = star[::-1]
# print(reversed_star)

star = ""

for i in range(1, 6):
    # Adding spaces before stars
    for j in range(5 - i):
        star += " "
    
    # Adding stars
    for k in range(i):
        star += "*"

    # Moving to the next line
    star += "\n"

print(star)
