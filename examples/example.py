# With the power of an eternal born with deviant genes...

class Titan:
    def __init__(self, config) -> None:
        self.name = config.name
        self.age = config.age
        self.species = config.species
        self.items = config.items
        self.isMad = config.isMad

    def get_age(self):
        return self.estimateAge()

    def estimateAge(self):
        return f"{self.name} is approximately {self.age} years old."


"""

The mad titan was born..

"""

infinity_stones = ["space", "mind", "reality", "power", "time", "soul"]

Thanos = Titan({
    "name": "Thanos",
    "age": 1000,
    "species": "Eternal-Deviant Hybrid",
    "items": ["Infinity Gauntlet", *infinity_stones],
    "isMad": True,
})

print(Thanos.get_age())

brackets = [[[[[[]]]]]]
# enabled by adding:  "editor.bracketPairColorization.enabled": true  to your settings.json