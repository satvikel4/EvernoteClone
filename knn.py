"""
    The programming assignment for advanced and intermediate is as follows:

    Create a K-Nearest Neighbor Classification model with a fit and predict method. 
    You may  use Numpy or Pandas to read the data, which will be in a csv file. 
    You may also use the math library. 

    fit:
    This method should save the data as a variable for later use. 
    predict:
    This method should predict the group of a new data point and return it as an integer. Please design the model using the Euclidean method. This will be the easiest and the most 
    efficient to do with the math library at this level.
    """
import numpy
import math 
class KNNClassification:
    def __init__(self, k):
        self.k = k

    def fit(self,X, y):
        self.X = X
        self.y = y

    def predict(self,X_predict):
        distances = []
        for index1, row in enumerate(self.X):
            distance = 0
            for index2, value in enumerate(row):
                distance += (value - X_predict[0][index2])**2
            distance = math.sqrt(distance)
            distances.append((distance, self.y[index1][0]))
        distances = sorted(distances, key=lambda t: t[0], reverse=False)[:self.k]
        category_count = {}
        category_count = dict({(str(item[1]), 0) for item in distances})
        for item in distances:
            category_count[str(item[1])] += 1
        maximum = 0
        for item in category_count.items():
            if item[1] > maximum:
                maximum = item[1]
        for item in category_count.items():
            if item[1] == maximum:
                return item[0]

classifier = KNNClassification(6)
classifier.fit(numpy.array([[1,10],[2,20],[3,30],[4,40],[5,50],[6,60],[7,70],[8,80],[9,90],[10,100]]),numpy.array([[1],[1],[1],[2],[2],[2],[3],[3],[3],[3]]))
print(classifier.predict(numpy.array([[3,30]])))