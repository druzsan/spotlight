"""
Shared types for data analysis
"""

from typing import Callable, Iterable, List, Literal, Optional

from pydantic import BaseModel

from renumics.spotlight.data_store import DataStore


class DataIssue(BaseModel):
    """
    An Issue affecting multiple rows of the dataset
    """

    severity: Literal["low", "medium", "high"] = "medium"
    title: str
    rows: List[int]
    columns: Optional[List[str]] = None
    description: str = ""


DataAnalyzer = Callable[[DataStore, List[str]], Iterable[DataIssue]]
