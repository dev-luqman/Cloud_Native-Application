# Kubernetes Learning Guide

This repository serves as a structured learning guide for Kubernetes. It covers core concepts like Pods, ReplicaSets, Deployments, and Namespaces, with examples and commands to reinforce learning.

## Topics

### 1. Pods
- **Description**: Pods are the basic building blocks of Kubernetes.
- **Commands**:
  - Create a pod: `kubectl create -f pod.yaml`
  - List pods: `kubectl get pods`
  - Describe a pod: `kubectl describe pod <pod-name>`

---

### 2. ReplicaSets
- **Description**: Ensure the desired number of pod replicas are running.
- **Commands**:
  - Create a ReplicaSet: `kubectl create -f replicaset.yaml`
  - List ReplicaSets: `kubectl get replicasets`
  - Delete a ReplicaSet: `kubectl delete replicaset <replicaset-name>`

---

### 3. Deployments
- **Description**: High-level management of Pods and ReplicaSets.
- **Commands**:
  - Create a deployment: `kubectl create -f deployment.yaml`
  - Update a deployment: `kubectl apply -f deployment.yaml --record`
  - Rollback a deployment: `kubectl rollout undo deployment <deployment-name>`

---

### 4. Namespaces
- **Description**: Logical grouping and isolation of Kubernetes resources.
- **Commands**:
  - Create a namespace:
    - Imperative: `kubectl create namespace <namespace-name>`
    - Declarative: `kubectl apply -f namespace.yaml`
  - Set default namespace:  
    - `kubectl config set-context $(kubectl config current-context) --namespace=<namespace-name>`

---

### Resources
- [Kubernetes Official Documentation](https://kubernetes.io/docs/home/)
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
