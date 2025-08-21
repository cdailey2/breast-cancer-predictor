import sys

# Verify which Python interpreter is being used
print(f"Using Python interpreter: {sys.executable}")

# Import scikit-learn and check its version
try:
    import sklearn
    print(f"scikit-learn version: {sklearn.__version__}")
except ImportError:
    print("scikit-learn is not installed in this environment.")

# Import pandas and check if it's installed
try:
    import pandas as pd
    print(f"pandas version: {pd.__version__}")
except ImportError:
    print("pandas is not installed in this environment.")

# Import Flask and check if it's installed
try:
    from flask import Flask
    print("Flask is installed.")
except ImportError:
    print("Flask is not installed in this environment.")

# Perform a simple task
print("Hello, World! This is a test script running in the virtual environment.")
