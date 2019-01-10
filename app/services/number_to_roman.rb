class NumberToRoman
  def self.transform(number)
    return "The Romans have no zeros just heros. https://www.theguardian.com/notesandqueries/query/0,5753,-1358,00.html " if number == 0
    symbols = {1000 => "M",900 => "CM", 500 => "D",400 => "CD", 100 => "C",90 => "XC", 50 => "L",40 =>"XL", 10 => "X",9 => "IX", 5 => "V",4 => "IV",  1=> "I"}
     multiplier = number
     symbol = []
     count = 0
     symbols.each do |num, sym|
       symbol.push(sym * (multiplier/num))
       multiplier = multiplier % num
       count += 1
     end
    return symbol.join
 end
end