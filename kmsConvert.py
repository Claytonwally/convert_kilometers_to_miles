print('how many kilometers did you wish to convert to miles')
kms = input()
converter=float(kms)/1.60934
converting=int(converter)
converted=str(converting)
print(f"ok you said {kms} kms.")
print(f"if you convert {kms}kms to miles you will get {converting} miles")
