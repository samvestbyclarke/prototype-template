using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.EventSystems;
using System;
using UnityEngine.SceneManagement;

public class Player : MonoBehaviour
{

    private Rigidbody2D _rigid;
    public float _jumpForce = 20.0f;
    [SerializeField]
    private float _speed = 5f;
    private float _currSpeed = 0;

    [SerializeField]
    private float _acceleration = 5f;

    void Start()
    {
        _rigid = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        Movement();
    }

    void Movement()
    {
        float move = Input.GetAxisRaw("Horizontal");


        if (Input.GetAxis("Horizontal") == 0)
        {

            if (_currSpeed > _acceleration && _currSpeed > 0) _currSpeed -= _acceleration;

        }
        else
        {
            if (_currSpeed < _speed)
            {
                _currSpeed += _acceleration * Time.deltaTime;
            }

        }

        _rigid.velocity = new Vector2(move * _currSpeed, _rigid.velocity.y);

    }
}
