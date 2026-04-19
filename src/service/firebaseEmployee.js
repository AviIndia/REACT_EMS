import { db } from "../firebase";
import { collection,getDocs,addDoc,doc,updateDoc,deleteDoc,getDoc } from "firebase/firestore";

const colRef = collection(db, "employees");

// GET ALL
export const getFbEmployees = async () => {
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// GET BY ID
export const getEmployeeById = async (id) => {
  const snap = await getDoc(doc(db, "employees", id));
  return { id: snap.id, ...snap.data() };
};

// ADD
export const addEmployee = async (data) => {
  await addDoc(colRef, data);
};

// UPDATE
export const updateEmployee = async (id, data) => {
  await updateDoc(doc(db, "employees", id), data);
};

// DELETE
export const removeEmployee = async (id) => {
  await deleteDoc(doc(db, "employees", id));
};