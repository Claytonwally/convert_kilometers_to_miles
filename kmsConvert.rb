def converter
puts('Enter the nuber of kilometer you would like to convert to miles ')
kms = gets().to_f
divisor= 1.60934
convert=kms/divisor
miles = convert.to_s
puts("ok you said #{kms} kms.")
puts("If you convert #{kms} kms to miles you will get #{miles} miles")
end

converter()
