from abc import ABC, abstractmethod

class Building(ABC):
    def __init__(self, sqft):
        self._sqft = sqft

    @property
    def sqft(self):
        return self._sqft

    @abstractmethod
    def evacuationWarningMessage(self):
        pass

# Example usage:
class OfficeBuilding(Building):
    def __init__(self, sqft, num_floors):
        super().__init__(sqft)
        self._num_floors = num_floors

    @property
    def num_floors(self):
        return self._num_floors

    def evacuationWarningMessage(self):
        return "Please proceed to the nearest exit in an orderly manner."

# Testing
office = OfficeBuilding(10000, 5)
print(office.sqft)  # Output: 10000
print(office.num_floors)  # Output: 5
print(office.evacuationWarningMessage())
