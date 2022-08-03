package titan

import "fmt"

// With the power of an eternal born with deviant genes...

type Being interface {
	GetAge()
}

type Titan struct {
	name    string
	age     int
	species string
	items   []string
	isMad   bool
}

func (t Titan) GetAge() string {
	return estimateAge(t.name, t.age)
}

func estimateAge(name string, age int) string {
	return fmt.Sprintf("%s is approximately %d years old.", name, age)
}

/*

  The mad titan was born..

*/

func main() {

	infinity_stones := []string{"space", "mind", "reality", "power", "time", "soul"}

	Thanos := Titan{
		name:    "Thanos",
		age:     1000,
		species: "Eternal-Deviant Hybrid",
		items:   append([]string{"Infinity Gauntlet"}, infinity_stones...),
		isMad:   true,
	}

	fmt.Print(Thanos.GetAge())

	// brackets := [[[[[[]]]]]]
	// enabled by adding:  "editor.bracketPairColorization.enabled": true  to your settings.json
}
